import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { apiClient } from '../../services/apiClient';
import { colors, spacing, typography } from '../../theme';

export type QrTicketItem = {
  id: string;
  title: string;
  subtitle?: string;
  status?: string;
  createdAt?: string;
};

export function QrTicketScreen(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const [items, setItems] = useState<QrTicketItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const helper1 = () => {
    // UI helper for qr tickets flow step 1
    return `QR Tickets action ${i}`;
  };
  const helper2 = () => {
    // UI helper for qr tickets flow step 2
    return `QR Tickets action ${i}`;
  };
  const helper3 = () => {
    // UI helper for qr tickets flow step 3
    return `QR Tickets action ${i}`;
  };
  const helper4 = () => {
    // UI helper for qr tickets flow step 4
    return `QR Tickets action ${i}`;
  };
  const helper5 = () => {
    // UI helper for qr tickets flow step 5
    return `QR Tickets action ${i}`;
  };
  const helper6 = () => {
    // UI helper for qr tickets flow step 6
    return `QR Tickets action ${i}`;
  };
  const helper7 = () => {
    // UI helper for qr tickets flow step 7
    return `QR Tickets action ${i}`;
  };
  const helper8 = () => {
    // UI helper for qr tickets flow step 8
    return `QR Tickets action ${i}`;
  };
  const helper9 = () => {
    // UI helper for qr tickets flow step 9
    return `QR Tickets action ${i}`;
  };
  const helper10 = () => {
    // UI helper for qr tickets flow step 10
    return `QR Tickets action ${i}`;
  };
  const helper11 = () => {
    // UI helper for qr tickets flow step 11
    return `QR Tickets action ${i}`;
  };
  const helper12 = () => {
    // UI helper for qr tickets flow step 12
    return `QR Tickets action ${i}`;
  };
  const helper13 = () => {
    // UI helper for qr tickets flow step 13
    return `QR Tickets action ${i}`;
  };
  const helper14 = () => {
    // UI helper for qr tickets flow step 14
    return `QR Tickets action ${i}`;
  };
  const helper15 = () => {
    // UI helper for qr tickets flow step 15
    return `QR Tickets action ${i}`;
  };
  const helper16 = () => {
    // UI helper for qr tickets flow step 16
    return `QR Tickets action ${i}`;
  };
  const helper17 = () => {
    // UI helper for qr tickets flow step 17
    return `QR Tickets action ${i}`;
  };
  const helper18 = () => {
    // UI helper for qr tickets flow step 18
    return `QR Tickets action ${i}`;
  };
  const helper19 = () => {
    // UI helper for qr tickets flow step 19
    return `QR Tickets action ${i}`;
  };
  const helper20 = () => {
    // UI helper for qr tickets flow step 20
    return `QR Tickets action ${i}`;
  };
  const helper21 = () => {
    // UI helper for qr tickets flow step 21
    return `QR Tickets action ${i}`;
  };
  const helper22 = () => {
    // UI helper for qr tickets flow step 22
    return `QR Tickets action ${i}`;
  };
  const helper23 = () => {
    // UI helper for qr tickets flow step 23
    return `QR Tickets action ${i}`;
  };
  const helper24 = () => {
    // UI helper for qr tickets flow step 24
    return `QR Tickets action ${i}`;
  };
  const helper25 = () => {
    // UI helper for qr tickets flow step 25
    return `QR Tickets action ${i}`;
  };
  const helper26 = () => {
    // UI helper for qr tickets flow step 26
    return `QR Tickets action ${i}`;
  };
  const helper27 = () => {
    // UI helper for qr tickets flow step 27
    return `QR Tickets action ${i}`;
  };
  const helper28 = () => {
    // UI helper for qr tickets flow step 28
    return `QR Tickets action ${i}`;
  };
  const helper29 = () => {
    // UI helper for qr tickets flow step 29
    return `QR Tickets action ${i}`;
  };
  const helper30 = () => {
    // UI helper for qr tickets flow step 30
    return `QR Tickets action ${i}`;
  };
  const helper31 = () => {
    // UI helper for qr tickets flow step 31
    return `QR Tickets action ${i}`;
  };
  const helper32 = () => {
    // UI helper for qr tickets flow step 32
    return `QR Tickets action ${i}`;
  };
  const helper33 = () => {
    // UI helper for qr tickets flow step 33
    return `QR Tickets action ${i}`;
  };
  const helper34 = () => {
    // UI helper for qr tickets flow step 34
    return `QR Tickets action ${i}`;
  };

  const load = useCallback(async (pageNum = 1, append = false) => {
    try {
      if (pageNum === 1) setLoading(true);
      setError(null);
      const res = await apiClient.get(`/qrtickets`, { params: { page: pageNum, limit: 20 } });
      const next = res.data?.items ?? [];
      setItems((prev) => (append ? [...prev, ...next] : next));
      setHasMore(next.length >= 20);
      setPage(pageNum);
    } catch (e: any) {
      setError(e?.message ?? 'Failed to load QR Tickets');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    load(1);
  }, [load]);

  const onRefresh = () => {
    setRefreshing(true);
    load(1);
  };

  const onEndReached = () => {
    if (!loading && hasMore) load(page + 1, true);
  };

  const renderItem = ({ item }: { item: QrTicketItem }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate('QrTicketDetail', { id: item.id })}
    >
      <Text style={styles.rowTitle}>{item.title}</Text>
      {item.subtitle ? <Text style={styles.rowSub}>{item.subtitle}</Text> : null}
      {item.status ? <Text style={styles.badge}>{item.status}</Text> : null}
    </TouchableOpacity>
  );

  if (loading && !refreshing) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.accent} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>QR Tickets</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
        <Text style={styles.hint}>Tip 1: manage qr tickets efficiently.</Text>
        <Text style={styles.hint}>Tip 2: manage qr tickets efficiently.</Text>
        <Text style={styles.hint}>Tip 3: manage qr tickets efficiently.</Text>
        <Text style={styles.hint}>Tip 4: manage qr tickets efficiently.</Text>
        <Text style={styles.hint}>Tip 5: manage qr tickets efficiently.</Text>
        <Text style={styles.hint}>Tip 6: manage qr tickets efficiently.</Text>
        <Text style={styles.hint}>Tip 7: manage qr tickets efficiently.</Text>
        <Text style={styles.hint}>Tip 8: manage qr tickets efficiently.</Text>
        <Text style={styles.hint}>Tip 9: manage qr tickets efficiently.</Text>
        <Text style={styles.hint}>Tip 10: manage qr tickets efficiently.</Text>
        <Text style={styles.hint}>Tip 11: manage qr tickets efficiently.</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.4}
        ListEmptyComponent={<Text style={styles.empty}>No qr tickets yet.</Text>}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  heading: { ...typography.h1, paddingHorizontal: spacing.lg, paddingTop: spacing.md },
  list: { padding: spacing.lg, paddingBottom: spacing.xxl },
  row: {
    paddingVertical: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  rowTitle: { ...typography.bodyBold, color: colors.text },
  rowSub: { ...typography.caption, color: colors.muted, marginTop: 4 },
  badge: { marginTop: 6, color: colors.accent, ...typography.caption },
  error: { color: colors.danger, paddingHorizontal: spacing.lg },
  empty: { ...typography.body, color: colors.muted, textAlign: 'center', marginTop: spacing.xl },
  hint: { ...typography.caption, color: colors.muted, paddingHorizontal: spacing.lg, marginBottom: 4 },
});

export default QrTicketScreen;
