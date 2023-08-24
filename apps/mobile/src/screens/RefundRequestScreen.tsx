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

export type RefundRequestItem = {
  id: string;
  title: string;
  subtitle?: string;
  status?: string;
  createdAt?: string;
};

export function RefundRequestScreen(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const [items, setItems] = useState<RefundRequestItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const helper1 = () => {
    // UI helper for request refund flow step 1
    return `Request Refund action ${i}`;
  };
  const helper2 = () => {
    // UI helper for request refund flow step 2
    return `Request Refund action ${i}`;
  };
  const helper3 = () => {
    // UI helper for request refund flow step 3
    return `Request Refund action ${i}`;
  };
  const helper4 = () => {
    // UI helper for request refund flow step 4
    return `Request Refund action ${i}`;
  };
  const helper5 = () => {
    // UI helper for request refund flow step 5
    return `Request Refund action ${i}`;
  };
  const helper6 = () => {
    // UI helper for request refund flow step 6
    return `Request Refund action ${i}`;
  };
  const helper7 = () => {
    // UI helper for request refund flow step 7
    return `Request Refund action ${i}`;
  };
  const helper8 = () => {
    // UI helper for request refund flow step 8
    return `Request Refund action ${i}`;
  };
  const helper9 = () => {
    // UI helper for request refund flow step 9
    return `Request Refund action ${i}`;
  };
  const helper10 = () => {
    // UI helper for request refund flow step 10
    return `Request Refund action ${i}`;
  };
  const helper11 = () => {
    // UI helper for request refund flow step 11
    return `Request Refund action ${i}`;
  };
  const helper12 = () => {
    // UI helper for request refund flow step 12
    return `Request Refund action ${i}`;
  };
  const helper13 = () => {
    // UI helper for request refund flow step 13
    return `Request Refund action ${i}`;
  };
  const helper14 = () => {
    // UI helper for request refund flow step 14
    return `Request Refund action ${i}`;
  };
  const helper15 = () => {
    // UI helper for request refund flow step 15
    return `Request Refund action ${i}`;
  };
  const helper16 = () => {
    // UI helper for request refund flow step 16
    return `Request Refund action ${i}`;
  };
  const helper17 = () => {
    // UI helper for request refund flow step 17
    return `Request Refund action ${i}`;
  };
  const helper18 = () => {
    // UI helper for request refund flow step 18
    return `Request Refund action ${i}`;
  };
  const helper19 = () => {
    // UI helper for request refund flow step 19
    return `Request Refund action ${i}`;
  };
  const helper20 = () => {
    // UI helper for request refund flow step 20
    return `Request Refund action ${i}`;
  };
  const helper21 = () => {
    // UI helper for request refund flow step 21
    return `Request Refund action ${i}`;
  };
  const helper22 = () => {
    // UI helper for request refund flow step 22
    return `Request Refund action ${i}`;
  };
  const helper23 = () => {
    // UI helper for request refund flow step 23
    return `Request Refund action ${i}`;
  };
  const helper24 = () => {
    // UI helper for request refund flow step 24
    return `Request Refund action ${i}`;
  };

  const load = useCallback(async (pageNum = 1, append = false) => {
    try {
      if (pageNum === 1) setLoading(true);
      setError(null);
      const res = await apiClient.get(`/refundrequests`, { params: { page: pageNum, limit: 20 } });
      const next = res.data?.items ?? [];
      setItems((prev) => (append ? [...prev, ...next] : next));
      setHasMore(next.length >= 20);
      setPage(pageNum);
    } catch (e: any) {
      setError(e?.message ?? 'Failed to load Request Refund');
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

  const renderItem = ({ item }: { item: RefundRequestItem }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate('RefundRequestDetail', { id: item.id })}
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
      <Text style={styles.heading}>Request Refund</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
        <Text style={styles.hint}>Tip 1: manage request refund efficiently.</Text>
        <Text style={styles.hint}>Tip 2: manage request refund efficiently.</Text>
        <Text style={styles.hint}>Tip 3: manage request refund efficiently.</Text>
        <Text style={styles.hint}>Tip 4: manage request refund efficiently.</Text>
        <Text style={styles.hint}>Tip 5: manage request refund efficiently.</Text>
        <Text style={styles.hint}>Tip 6: manage request refund efficiently.</Text>
        <Text style={styles.hint}>Tip 7: manage request refund efficiently.</Text>
        <Text style={styles.hint}>Tip 8: manage request refund efficiently.</Text>
        <Text style={styles.hint}>Tip 9: manage request refund efficiently.</Text>
        <Text style={styles.hint}>Tip 10: manage request refund efficiently.</Text>
        <Text style={styles.hint}>Tip 11: manage request refund efficiently.</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.4}
        ListEmptyComponent={<Text style={styles.empty}>No request refund yet.</Text>}
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

export default RefundRequestScreen;
